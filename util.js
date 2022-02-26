const { writeFile } = require('fs/promises')
const csvtojson = require('csvtojson')
const { Parser } = require('json2csv')

const readCsv = filePath => csvtojson().fromFile(filePath)

const writeCsv = async (data, filePath, fields) => {
  const parser = new Parser({
    fields
  })
  const csv = await parser.parse(data)
  await writeFile(filePath, '\ufeff' + csv)
}
