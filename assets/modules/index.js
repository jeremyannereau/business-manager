import dashboard  from './dashboard/index.js'
import kanban     from './kanban/index.js'
import finances   from './finances/index.js'
import calendrier from './calendrier/index.js'

// Ordre d'affichage dans la navigation
export const ALL_MODULES = [ dashboard, kanban, calendrier, finances ]

// Accès rapide par clé
export const MODULES_MAP = Object.fromEntries(ALL_MODULES.map(m => [m.key, m]))
