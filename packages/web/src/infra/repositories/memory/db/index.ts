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
import _304M from './304M.json'
import _305R from './305R.json'
import _306R from './306R.json'
import _3356 from './3356.json'
import _3370 from './3370.json'
import _3390 from './3390.json'
import _3450 from './3450.json'
import _3460 from './3460.json'
import _3480 from './3480.json'
import _3500 from './3500.json'
import _3520 from './3520.json'
import _3540 from './3540.json'
import _3560 from './3560.json'
import _C001 from './C001.json'
import _C002 from './C002.json'

// import _1013P from './1013P.json'
// import _1015P from './1015P.json'
// import _1020P from './1020P.json'
// import _1021P from './1021P.json'
// import _1024P from './1024P.json'
// import _1025P from './1025P.json'
// import _1030P from './1030P.json'
// import _1031P from './1031P.json'

import * as BuScheduleEntity from '../entities/bus-schedule'

const buses = [
  _1012,
  _1013,
  _1015,
  _1020,
  _1021,
  _1024,
  _1025,
  _1030,
  _1031,
  _300C,
  _301C,
  _302H,
  _303M,
  _304M,
  _305R,
  _306R,
  _3356,
  _3370,
  _3390,
  _3450,
  _3460,
  _3480,
  _3500,
  _3520,
  _3540,
  _3560,
  _C001,
  _C002

  // _1013P,
  // _1015P,
  // _1020P,
  // _1021P,
  // _1024P,
  // _1025P,
  // _1030P,
  // _1031P
]
  .map(BuScheduleEntity.parse)
  .sort((a, b) => (a.bus.id > b.bus.id ? 1 : -1))

export default buses
