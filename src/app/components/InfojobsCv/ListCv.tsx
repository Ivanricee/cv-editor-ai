interface Props {
  isMultiSelect: boolean
  //
  handleCvOption: () => void
}
export function ListCv({ isMultiSelect, handleCvOption }: Props) {
  const handleClickOption = () => {
    //get ids from event
    //filter list of cvs with those ids.
    //trigger function with the array of cv´s
    handleClickOption
  }
  return (
    <ul>
      <li>
        Get list of cv from infojobs or from store in useEffect and store list
        if is needed
      </li>
      <li>Show select if theres data from store</li>
      <li>Option to select 1 or multiple option (isMultiSelect)</li>
      <li>use the prop function to send back the data</li>
    </ul>
  )
}
