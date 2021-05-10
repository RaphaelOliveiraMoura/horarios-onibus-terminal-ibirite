import { Schedule } from 'domain/models'

import _1012 from './1012.json'
import _1013 from './1013.json'
import _1015 from './1015.json'
import _1020 from './1020.json'
import _1021 from './1021.json'
import _1024 from './1024.json'
import _1025 from './1025.json'
import _1030 from './1030.json'
import _1031 from './1031.json'
import _300C from './300C.json'
import _301C from './301C.json'
import _302H from './302H.json'
import _303M from './303M.json'
import _306R from './306R.json'
import _3356 from './3356.json'
import _3370 from './3370.json'
import _3390 from './3390.json'
import _3450 from './3450.json'
import _3460 from './3460.json'
import _3480 from './3480.json'
import _3490 from './3490.json'
import _3500 from './3500.json'
import _3520 from './3520.json'
import _3540 from './3540.json'
import _3560 from './3560.json'
import _C001 from './C001.json'
import _C002 from './C002.json'

type BusesMemoryDatabase = { id: string; name: string; schedule: Schedule }

type BusJson = {
  id: string
  workingDays: string[]
  saturdays: string[]
  sundays: string[]
}

function mapJson(json: BusJson) {
  return {
    id: json.id,
    name: json.id,
    schedule: {
      workingDays: json.workingDays.map(Schedule.toTimeMap),
      saturdays: json.saturdays.map(Schedule.toTimeMap),
      sundays: json.sundays.map(Schedule.toTimeMap)
    }
  } as BusesMemoryDatabase
}

const buses: BusesMemoryDatabase[] = [
  mapJson(_1012),
  mapJson(_1013),
  mapJson(_1015),
  mapJson(_1020),
  mapJson(_1021),
  mapJson(_1024),
  mapJson(_1025),
  mapJson(_1030),
  mapJson(_1031),
  mapJson(_300C),
  mapJson(_301C),
  mapJson(_302H),
  mapJson(_303M),
  mapJson(_306R),
  mapJson(_3356),
  mapJson(_3370),
  mapJson(_3390),
  mapJson(_3450),
  mapJson(_3460),
  mapJson(_3480),
  mapJson(_3490),
  mapJson(_3500),
  mapJson(_3520),
  mapJson(_3540),
  mapJson(_3560),
  mapJson(_C001),
  mapJson(_C002)
]

export default buses
