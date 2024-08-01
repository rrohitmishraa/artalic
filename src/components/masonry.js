export default function Masonry(props) {
  props.images.map((img) => console.log(img));
  return (
    <div
      className="masonry"
      style={{ columns: props.columnCount, columnGap: 0 }}
    >
      {props.images.map((img, i) => (
        <img src={img} key={i} className="image" />
      ))}
    </div>
  );
}
