const PersonForm = ({submit, name, nameChange, phone, phoneChange}) => {

    return (
        <form onSubmit={submit}>
        <div> 
          name: <input value={name} onChange={nameChange}/>
        </div>
        <div>number: <input value={phone} onChange={phoneChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm