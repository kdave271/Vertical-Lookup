const { readCsv, writeCsv } = require('./util')

const main = async () => {
  const mainKeys = []
  const primaryData = await readCsv(mainKeys[0].data)
  const secondaryData = mainKeys[1].data
  const primaryDataCheckColumns = mainKeys[0].checkColumns
  const secondaryDataCheckColumns = mainKeys[1].checkColumns
  const primaryDataColumns = mainKeys[0].checkColumns

  for (let i = 0; i < secondaryData.length; i++) {
    let secondaryCheckColumn = ''
    secondaryDataCheckColumns.forEach(ele => {
      secondaryCheckColumn += secondaryData[i][ele]
    })
    for (let k = 0; k < primaryData.length; k++) {
      let primaryCheckColumn = ''
      primaryDataCheckColumns.forEach(ele => {
        primaryCheckColumn += primaryData[k][ele]
      })
      if (primaryCheckColumn === secondaryCheckColumn) {
        primaryDataColumns.forEach(ele => {
          secondaryData[i][ele] = primaryData[k][ele]
        })
      }
    }
  }
  await writeCsv(secondaryData, './Output.csv')
}

main()
  .then(() => {
    console.log('Completed')
  })
  .catch(err => {
    console.log(err)
  })
