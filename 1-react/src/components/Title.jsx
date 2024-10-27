const Title = ({ hasBackBtn = false, children }) => {
  return (
    <>
      {hasBackBtn && <button>Back</button>}
      <h1>{children}</h1>
    </>
  )

}

export default Title;
