const InstaApi = {
  uploadImage: post => {
    fetch("/api/images", {
      method: "POST",
      body: createFormData(post.photo, { image: post })
    })
      .then(response => response.json())
      .then(response => {
        console.log("upload succes", response);
        alert("Upload success!");
        this.setState({ photo: null });
      })
      .catch(error => {
        console.log("upload error", error);
        alert("Upload failed!");
      });
  },
  getImages: () => {
     return fetch('/api/Images')
     .then((response) => response.json())
     .then((responseJson) => {
       return responseJson.movies;
     })
     .catch((error) => {
       console.error(error);
     });
  }
}

const createFormData = (photo, body) => {
  const data = new FormData();

  data.append("file", {
    name: photo.fileName,
    type: photo.type,
    uri:
      Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
  });

  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });

  return data;
};

export default InstaApi