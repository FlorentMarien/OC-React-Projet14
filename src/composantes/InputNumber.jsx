import './../styles/Input.css';
function InputNumber(data) {
    data = data.data;
    return (
        <>
        <label>{data.label}</label>
        <input id={data.name} name={data.name} type='number'/>
        </>
    );
}

export default InputNumber;