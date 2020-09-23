import React from "react";
import axios from "axios";
import Button from "./components/Button";

const App = () => {
  const buttonRef = React.useRef(null);
  const fileInput = React.useRef(null);
  const photoName = React.useRef(null);
  const [formData, setFormData] = React.useState(null);

  // React.useEffect(() => {
  //   if (buttonRef.current) {
  //     buttonRef.current.innerText = 'Кнопка!';
  //   }
  // })
  const handleSubmit = (evt) => {
    evt.preventDefault();

    // console.dir(fileInput.current)

    const fd = new FormData();
    fd.append('file', fileInput.current.files[0]);
    fd.append("photoName", photoName.current.value);

    setFormData(fd);
  }

  React.useEffect(() => {
    if (formData) {
      axios.post('http://localhost:3333', formData, {
        headers: { 'Content-Type': 'multipart/form-data'}
      })
      .then(console.log)
      .catch(console.error)
    }
  }, [formData])


  return (
    <React.Fragment>
      <h1>React Test Forward Ref</h1>
      <input type="text" name="photoName" ref={photoName}/>
      <form action="http://localhost:3333" method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
        <input type="file" name="photo" ref={fileInput}/>
        <Button ref={buttonRef} title={'Send file'}/>
      </form>
    </React.Fragment>
  );
};

export default App;
