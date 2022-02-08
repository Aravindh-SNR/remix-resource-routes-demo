import { Link } from "remix";

// Link to a resource route
const DownloadSpreadsheet = () => {
    return (
        <Link to='/spreadsheet' reloadDocument>
            <button>
                Download as Spreadsheet
            </button>
        </Link>
    );
};

export default DownloadSpreadsheet;