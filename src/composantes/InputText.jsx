import './../styles/Input.css';
function InputText(data) {
    data = data.data;
    return (
        <>
        <label>{data.label}</label>
        <input id={data.name} name={data.name} type='text'/>
        </>
    );
}

export default InputText;