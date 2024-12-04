import s from './Pages.module.css';

export const Pages = ({ shinobi, currentPage, setCurrentPage, itemsPerPage }) => {

    const totalPages = Math.ceil(shinobi.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className={s.back}>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
                Назад
            </button>
            <span>{` Страница ${currentPage} из ${totalPages}`}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                Вперед
            </button>
        </div>
    );
};