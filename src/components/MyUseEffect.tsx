import { useEffect, useState } from "react";
function MyUseEffect() {
    const [title, setTitle] = useState("react + Typescript");
useEffect(() => {}, []);
console.log(title);
const handleChangeTitle = () => {
    setTitle("React Update Title")
};
return (
    <div>
        <h2>{title}</h2>
        <button onClick={handleChangeTitle}>Change Title</button>
    </div>
);
}
export default MyUseEffect;