export const postComplain = (postData) => {
    const res = fetch(`http://localhost:8085/fomularioumg/api/quejaumg/form`, {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: { 'Content-Type': 'application/json' },
    })
  
    return res
}

export const saveComplain = async (postData) => postComplain(postData)