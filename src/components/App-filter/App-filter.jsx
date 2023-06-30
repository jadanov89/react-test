import "./App-filter.styled.css"

const AppFilter = () => {
    return (
        <div className="btn-gruup">
            <button type="button"
                    className="btn btn-light">
                    Все сотрудники
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    На повышение
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    З/П больше 1000$
            </button>
        </div>
    )
}

export default AppFilter;