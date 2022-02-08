import { Link } from "remix";

const DownloadJson = () => {
    return (
        <Link to='/spreadsheet' reloadDocument>
            <button>
                Download as Spreadsheet
            </button>
        </Link>
    );
};

export default DownloadJson;