const UpdateForm = ({updateData, changeTask, updateTask, cancelUpdate}) => {
    return (
        <>
        <div className="row">
            <div className="col">
                <input 
                    value={updateData && updateData.title}
                    onChange={ (e) => changeTask(e)}
                    type="texte" className="form-control form-control-lg" />
            </div>
            <div className="col-auto">
                <button 
                    onClick={updateTask}
                    className="btn btn-success btn-lg mr-20 ">Update</button>
                <button 
                    onClick={cancelUpdate}
                    className="btn btn-warning btn-lg">Cancel</button>
            </div>
        </div>
        <br/>
        </>
    );
}

export default UpdateForm;