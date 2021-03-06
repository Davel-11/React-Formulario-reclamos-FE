// 54.166.168.21
const server = '54.166.168.21'

export const postComplain = (postData) => {
    const res = fetch(`http://${server}:8085/fomularioumg/api/quejaumg/form`, {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: { 'Content-Type': 'application/json' },
    })
  
    return res
}

export const getReportOne = (from, to) => {
  const res = fetch(`http://${server}:8085/fomularioumg/api/quejaumg?from=${from}&to=${to}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })

  return res
}

export const getDepos = () => {
  const res = fetch(`http://${server}:8085/fomularioumg/api/quejaumg/dep`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })

  return res
}

export const saveComplain = async (postData) => postComplain(postData)
export const getReportByDates = async (from, to) => getReportOne(from, to)
export const getDepList = async () => getDepos()