import './App.css';
import TechnologyCard from './components/TechnologyCard';
function App() {
    const technologies = [
        { 
            id: 1, 
            title: 'React Components', 
            description: 'изучение функциональных и классовых компонентов, работа с props и state', 
            status: 'completed' 
        },
        { 
            id: 2, 
            title: 'JSX Syntax', 
            description: 'освоение синтаксиса JSX, условного рендеринга и работы со списками', 
            status: 'in-progress' 
        },
        { 
            id: 3, 
            title: 'State Management', 
            description: 'работа с состоянием компонентов, изучение хуков useState и useEffect', 
            status: 'not-started' 
        },
        { 
            id: 4, 
            title: 'React Router', 
            description: 'настройка маршрутизации в React-приложениях', 
            status: 'not-started' 
        },
        { 
            id: 5, 
            title: 'API Integration', 
            description: 'работа с внешними API, использование fetch и axios', 
            status: 'in-progress' 
        }
    ];
    const total = technologies.length;
    const completed = technologies.filter(tech => tech.status === 'completed').length;
    const progressPercentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    return (
        <div className="App">
            {}
            <div className="progress-header">
                <div className="progress-stats">
                    <h2>Дорожная карта изучения технологий</h2>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-number">{total}</span>
                            <span className="stat-label">Всего технологий</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">{completed}</span>
                            <span className="stat-label">Изучено</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">{technologies.filter(tech => tech.status === 'in-progress').length}</span>
                            <span className="stat-label">В процессе</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">{technologies.filter(tech => tech.status === 'not-started').length}</span>
                            <span className="stat-label">Не начато</span>
                        </div>
                    </div>
                </div>
                
                <div className="progress-bar-container">
                    <div className="progress-info">
                        <span>Общий прогресс: {progressPercentage}%</span>
                    </div>
                    <div className="progress-bar">
                        <div 
                            className="progress-fill"
                            style={{ width: `${progressPercentage}%` }}
                        ></div>
                    </div>
                </div>
            </div>
            
            <div className="technologies-list">
                <h2>Список технологий для изучения</h2>
                {technologies.map(technology => (
                    <TechnologyCard
                        key={technology.id}
                        title={technology.title}
                        description={technology.description}
                        status={technology.status}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;