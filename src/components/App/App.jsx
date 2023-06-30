import AppInfo from '../App-info/App-info';
import SearchPanel from '../Search-panel/Search-panel';
import AppFilter from '../App-filter/App-filter';
import EmployeesList from '../Employees-list/Employees-list';
import EmployeesForm from '../Employees-form/Employees-form';

import './App.styled.css';

function App() {

    const data = [
        {name: 'John C.', salary: 800, increase: false, id: 1},
        {name: 'Alex M.', salary: 3000, increase: true, id: 2},
        {name: 'Carl W.', salary: 5000, increase: false, id: 3}
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            
            <EmployeesList data={data}/>
            <EmployeesForm/>
        </div>
    );
}

export default App;