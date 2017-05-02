import yearlyElectricityCost from './yearly-electricity-cost'
import yearlyMaintenanceCost from './yearly-maintenance-cost'
import yearlyTransportCost from './yearly-transport-cost'

export default state => {
  const electricity = yearlyElectricityCost(state)
  const maintenance = yearlyMaintenanceCost(state)
  const transport = yearlyTransportCost(state)

  const totalSaving =
    electricity.saving.absolute +
    maintenance.saving.absolute +
    transport.saving.absolute

  const ourCost =
    electricity.value +
    maintenance.value +
    transport.value

  const averageCost = ourCost + totalSaving

  return {
    saving: {
      absolute: totalSaving,
      percentage: totalSaving / averageCost * 100
    },
    value: ourCost
  }
}
