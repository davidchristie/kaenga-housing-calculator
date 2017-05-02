import yearlyMaintenanceCost from './yearly-maintenance-cost'
import yearlyPowerCost from './yearly-power-cost'
import yearlyTransportCost from './yearly-transport-cost'

export default state => {
  const maintenance = yearlyMaintenanceCost(state)
  const power = yearlyPowerCost(state)
  const transport = yearlyTransportCost(state)

  const totalSaving =
    maintenance.saving.absolute +
    power.saving.absolute +
    transport.saving.absolute

  const ourCost =
    maintenance.value +
    power.value +
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
