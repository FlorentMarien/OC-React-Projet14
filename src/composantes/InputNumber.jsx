import './../styles/Input.css';
function InputNumber(data) {
    data = data.data;
    return (
        <>
        <label>{data.label}</label>
        <input type='number' name={data.name} placeholder={data.name}/>
        </>
    );
}

export default InputNumber;