import { Devices, findDevice } from "../"
import fixtures = require("./devices.json")

describe("findDevice", () => {
  Object.entries(fixtures).forEach(([description, userAgents]) => {
    userAgents.forEach((userAgent, i) => {
      it(`recognizes ${description} - userAgents[${i}]`, () => {
        expect(findDevice(userAgent)).toMatchObject({ description })
      })
    })
  })

  it("uses the largest iPhone version for Mobile Safari, which does not include a model identifier", () => {
    // tslint:disable-next-line:no-string-literal
    expect(findDevice(fixtures["iPhone"][0])).toMatchObject({
      description: "iPhone",
      width: 414,
      height: 896,
      pixelRatio: 3,
      touch: true,
    })
  })

  it("uses the largest iPod touch version for Mobile Safari, which does not include a model identifier", () => {
    expect(findDevice(fixtures["iPod touch"][0])).toMatchObject({
      description: "iPod touch",
      width: 320,
      height: 568,
      pixelRatio: 2,
      touch: true,
    })
  })

  it("uses the largest iPad for Mobile Safari, which does not include a model identifier", () => {
    // tslint:disable-next-line:no-string-literal
    expect(findDevice(fixtures["iPad"][0])).toMatchObject({
      description: "iPad",
      width: 1024,
      height: 1366,
      pixelRatio: 2,
      touch: true,
    })
  })
})
