
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, FormControl } from "@mui/material";

import { makeStyles } from '@mui/styles';
import { PhotoCamera } from "@mui/icons-material";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { storage } from "../firebase/firebase";
import { LoadingButton } from "@mui/lab";
import { fetchAssetData } from "../store/fetchAssetData-http-action";
import "./AssetInfo.scss";

const useStyle = makeStyles(theme => ({
  mainWrapper: {
    background: 'white',
    height: '100vh',
    overflow:'auto'
    
  }
}))

const AssetInfo = ({ aset }) => {
  const { assetId } = useParams();
  const assets = useSelector(state => state.assets.assets)
  const classes = useStyle()
  const curentAsset = assets.find((aset) => aset.id === assetId)
  const dispatch = useDispatch()
  const [inputValue, setinputValue] = useState({
    image: null,
    purchaseDate: null
  })
  
  const [data, setData] = useState();
  const sendRequest = async () => {
    const response = await fetch(`
    https://asset-manegment-default-rtdb.firebaseio.com/assets/${assetId}/images.json`,
    {
        method: 'POST',
        body: JSON.stringify(data)
      });
    if (!response.ok) {
      throw new Error('somthing went wrong');
    }
    if(response.ok){
      dispatch(fetchAssetData())
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    sendRequest()
    setData('')
  }
  

  const uploadFile = (e) => {
    e.preventDefault()
    //By creating a reference to a file, your app gains access to it.()
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, imageFile.name);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        switch (snapshot.state) {
          case "paused":
            console.log("Upload paused");
            break;
          case "running":
            console.log("Upload running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadedURL) => {
          console.log(downloadedURL);
          setinputValue({
            ...inputValue,
            image: downloadedURL
          });
          // you keep uploaded img url
          setData((prev) => ({ ...prev, alt: imageFile.name.sli, img: downloadedURL }));
        });
      }
    );
  };
  let assetImages = []
    for (const key in curentAsset?.images) {
      assetImages.push(curentAsset?.images[key]?.img)
    }
  
  return (
    <div className={classes.mainWrapper}>
      images
      <form onSubmit={submitHandler}>
        <FormControl >
          <IconButton className={classes.inputStyle} color="primary" aria-label="upload picture" component="label">
            <input hidden accept="image/*" type="file" onChange={uploadFile} />
            <PhotoCamera className={classes.purchaseDate} />
            {data?.img && (
              <img width={'100px'} src={data?.img} alt='lalaa' />
            )}
          </IconButton>
        </FormControl>
        <LoadingButton type="submit"
          loading={false}
          variant="outlined"
        >
          Submit
        </LoadingButton>
      </form>

    
      <div style={{display:'flex',flexFlow:'row', alignItems:'center', gap:'10px', flexWrap:'wrap'}}>
      {assetImages?.map(img => {      
        return (
          
          <img style={{borderRadius:'8px'}} width= '140' height="140" src={img} alt={img?.alt} />
        )
      })
      }
          </div>
    </div>
  )
}

export default AssetInfo
