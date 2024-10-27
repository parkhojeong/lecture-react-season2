const Title = ({ backUrl, children }) => {
  return (
    <>
      {backUrl && <a href={backUrl} />}
      <h1 style={{paddingRight: '44px'}}>{children}</h1>
    </>
  )

}

export default Title;
