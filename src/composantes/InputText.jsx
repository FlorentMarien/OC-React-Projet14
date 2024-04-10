import './../styles/Input.css';
function InputText(data) {
    data = data.data;
    return (
        <>
        <label>{data.label}</label>
        <input type='text' name={data.name} placeholder={data.name}/>
        </>
    );
}

export default InputText;