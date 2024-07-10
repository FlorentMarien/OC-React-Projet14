import './../styles/Input.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";

function HeaderDatatable(data) {
    return (
        <div className="flex justify-content-end">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <input type='text' value={data.state} onChange={(e) => data.setstate(e.target.value)} placeholder="Keyword Search" />
            </span>
        </div>
    );
}

export default HeaderDatatable;