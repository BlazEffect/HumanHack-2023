export default function Modal({ children, title, open, handleClose }) {
  return (
    open && (
      <div class="modal-wrapper flex justify-center items-center blured w-full h-full fixed top-0 left-0 right-0 bottom-0">
        <div className="modal p-4 w-[350px] relative rounded-[15px] bg-white border-[#70B839] border-2 h-[350px]">
            <div className="text-center">
                <h2 className="text-lg">{ title }</h2>
                <div className='absolute right-4 top-2 text-[24px]' onClick={handleClose}>
                    <img className="w-4 h-4" src="/public/img/cross_cool.png" alt="" />
                </div>
            </div>
            <div>
                {children}  
            </div>
        </div>
      </div>
    )
  );
}
