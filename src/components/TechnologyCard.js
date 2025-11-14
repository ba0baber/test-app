import './TechnologyCard.css';
function TechnologyCard({ title, description, status }) {
    return (
        <div className={`technology-card ${status}`}>
            <div className="card-header">
                <h3 className="card-title">{title}</h3>
                <span className={`status-badge ${status}`}>
                    {status === 'completed' && '✅'}
                    {status === 'in-progress' && '⏳'}
                    {status === 'not-started' && '⏰'}
                    {getStatusText(status)}
                </span>
            </div>
            <p className="card-description">{description}</p>
            <div className="card-footer">
                <span className="progress-indicator">
                    {getProgressText(status)}
                </span>
            </div>
        </div>
    );
}
function getStatusText(status) {
    switch(status) {
        case 'completed': return 'изучено';
        case 'in-progress': return 'в процессе';
        case 'not-started': return 'не начато';
        default: return status;
    }
}

function getProgressText(status) {
    switch(status) {
        case 'completed': return '100% выполнено';
        case 'in-progress': return '50% в процессе';
        case 'not-started': return '0% не начато';
        default: return '';
    }
}

export default TechnologyCard;