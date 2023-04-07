import { useState } from 'react';
import Button from "../components/Button";
import Modal from '../components/Modal';
import DrawingArea from "../components/DrawingArea";
import Layout from "../components/Layout";

export default function Drawing() {
  const [open, setOpen] = useState(false);

  const clearArea = () => {
    const canvas = document.getElementById('sketchpad')
    canvas.width = canvas.width;
  }

  const saveArea = () => {
    const canvas = document.getElementById('sketchpad');
    let dataURL = canvas.toDataURL("image/png");
    const images = localStorage.getItem('images')
    if(images) {
      const parsedImaged = JSON.parse(images);
      if(parsedImaged.length > 0) {
        parsedImaged.push(dataURL)
        localStorage.setItem('images', JSON.stringify(parsedImaged))
        setOpen(true)
        return
      } 
    }

    dataURL = [dataURL];
    localStorage.setItem('images', JSON.stringify(dataURL));
    setOpen(true)
  }
  return (
    <>
      <Layout>
          <h2 className="uppercase text-center mx-auto text-[16px]">
            рисование
          </h2>
          <div className="bg-white rounded-[15px] p-1 mt-4 m-2 border-[#70B839] border-2">
                <DrawingArea  />
          </div>
          <div className="mt-4 flex justify-center">
            <Button handleClick={saveArea}>
                Сохранить
            </Button>
            <Button handleClick={clearArea} className='ml-2'>
                Очистить
            </Button>
          </div>
      </Layout>
      <Modal handleClose={() => setOpen(false)} title={'Успех!'} open={open}>
        Готово
      </Modal>
    </>
  );
}
