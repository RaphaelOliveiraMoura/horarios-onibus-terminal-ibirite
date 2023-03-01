import _1012 from './buses/1012.json'
import _1013 from './buses/1013.json'
import _1015 from './buses/1015.json'
import _1020 from './buses/1020.json'
import _1021 from './buses/1021.json'
import _1023 from './buses/1023.json'
import _1024 from './buses/1024.json'
import _1025 from './buses/1025.json'
import _1026 from './buses/1026.json'
import _1030 from './buses/1030.json'
import _1031 from './buses/1031.json'
// import _C001 from './buses/C001.json'
// import _C002 from './buses/C002.json'
import _300C from './buses/300C.json'
import _301C from './buses/301C.json'
import _302H from './buses/302H.json'
import _303M from './buses/303M.json'
import _304M from './buses/304M.json'
import _305R from './buses/305R.json'
import _306R from './buses/306R.json'
import _3356 from './buses/3356.json'
import _3370 from './buses/3370.json'
import _3390 from './buses/3390.json'
import _3450 from './buses/3450.json'
import _3460 from './buses/3460.json'
import _3480 from './buses/3480.json'
import _3500 from './buses/3500.json'
import _3505 from './buses/3505.json'
import _3520 from './buses/3520.json'
import _3525 from './buses/3525.json'
import _3540 from './buses/3540.json'
import _3560 from './buses/3560.json'

import _1013P from './buses/1013P.json'
import _1015P from './buses/1015P.json'
import _1020P from './buses/1020P.json'
import _1021P from './buses/1021P.json'
// import _1024P from './buses/1024P.json'
// import _1025P from './buses/1025P.json'
import _1030P from './buses/1030P.json'
import _1031P from './buses/1031P.json'

import _3455 from './buses/3455.json'
import _3465 from './buses/3465.json'

type BusJSON = {
  id: string
  name: string
  map?: string
  labels: unknown
  workingDays: string[]
  saturdays: string[]
  sundays: string[]
}

export const busesMemory: BusJSON[] = [
  _1012,

  _1013,
  _1013P,

  _1015,
  _1015P,

  _1020,
  _1020P,

  _1021,
  _1021P,

  _1023,

  _1024,
  // _1024P,

  _1025,
  // _1025P,

  _1026,

  _1030,
  _1030P,

  _1031,
  _1031P,

  // _C001,
  // _C002,

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
  _3455,
  _3460,
  _3465,
  _3480,
  _3500,
  _3505,
  _3520,
  _3525,
  _3540,
  _3560
]
