const sponsorsMap = {
	"ゴールドスポンサー": "GOLD",
	"シルバースポンサー": "SILVER",
	"ブロンズスポンサー": "BRONZE",
	"ランチスポンサー": "LUNCH",
	"ドリンクスポンサー": "DRINK",
	"エコバッグスポンサー": "ECOBAG",
	"デザインスポンサー": "DESIGN",
	"経理事務協力": "SUPPORT",
}
const getSponsorKey = plan_name => {
  return sponsorsMap[plan_name]
}

export const actions = {
  async fetchSponsors(){
    const {data} = await this.$axios.get("/sponsors")
    const sponsors = {}
    for(let plan of data.sponsor_plans){
      sponsors[getSponsorKey(plan.name)] = {
        label: plan.name,
        sponsors: plan.sponsors
      }
    }
    return sponsors
  },
  async fetchStaffs(){
    const {data} = await this.$axios.get("/staff")
    const staffs = []
    for (let title of Object.keys(data.staff)) {
      for(let staff of data.staff[title]) {
        staffs.push(staff)
      }
    }
    return staffs
  },
  async fetchSponsorData({}, name){
		const {data} = await this.$axios.get("/sponsors")

		for(let plan of data.sponsor_plans) {
			for(let sponsor of plan.sponsors) {
			  if (sponsor.name == name) {
					sponsor.plan = getSponsorKey(plan.name)
					return sponsor
        }
			}
		}
	}
}
