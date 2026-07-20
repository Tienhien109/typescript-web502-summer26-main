import { useState } from "react";

function MyState() {
    const [money, setMoney] = useState(100000);
    
    const handleJob = () => {
        setMoney(money + 50000);
    };
    
    return (
        <div>
            <h2>MyState</h2>
            <p>So tien dang co:{money} VND</p>
            <button onClick={handleJob}>Đi lam them moi ngay</button>
        </div>
    );
}
export default MyState