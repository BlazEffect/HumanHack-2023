import DrawingArea from "../components/DrawingArea";

export default function Drawing() {
  return (
    <>
      <h1>Drawing</h1>
      <div className="border-">
            <DrawingArea />
      </div>
      <button>Save</button>
    </>
  );
}
