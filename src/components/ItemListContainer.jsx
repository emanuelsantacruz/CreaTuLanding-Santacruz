const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 border-bottom pb-2">LeParfum ARG</h1>

            <div className="alert alert-light text-center mb-5" role="alert">
                <p className="fs-4 m-0">{greeting}</p>
            </div>

            <div className="row g-4">
                <div className="col-12 text-center text-muted">
                    <div className="p-5 border rounded bg-light">
                        <p>Proximamente productos aqui!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemListContainer;
