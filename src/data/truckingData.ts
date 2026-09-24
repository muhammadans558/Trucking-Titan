export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface EquipmentType {
  id: string;
  name: string;
  category: string;
  specs: string;
  idealFor: string;
}

export const COMPANY_PHONE = '+1 (978) 226 3863';
export const COMPANY_PHONE_TEL = 'tel:+19782263863';
export const COMPANY_EMAIL = 'contact.truckingtitan@gmail.com';
export const COMPANY_TAGLINE = 'Truck Dispatch Services Across USA';

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'what-dispatcher-does',
    question: 'What does a truck dispatcher do?',
    answer: 'A professional truck dispatcher acts as your administrative back-office partner. A dispatcher assists with searching for freight that fits your operation, contacting brokers, negotiating rates when appropriate, completing broker setup packets, reviewing rate confirmations, and keeping dispatch details organized while you focus on driving safely.'
  },
  {
    id: 'work-with-owner-operators',
    question: 'Do you work with owner-operators?',
    answer: 'Yes. Trucking Titan works directly with owner-operators and carrier fleets that hold active motor carrier (MC) authority and want focused operational support to reduce deadhead, phone time, and desk paperwork.'
  },
  {
    id: 'equipment-supported',
    question: 'What equipment do you support?',
    answer: 'We deal with Dry Van, Reefer, Flat Bed, Step Deck, Box Truck, Flat Bed Hot Shot, Power Only, and specialized freight combinations.'
  },
  {
    id: 'broker-communication',
    question: 'Do you communicate with brokers?',
    answer: 'Yes. We handle daily broker calls, emails, load inquiries, and rate discussions on your behalf. We verify load requirements, check detention and layover policies, and present load options for your explicit approval before any load is booked.'
  },
  {
    id: 'carrier-paperwork',
    question: 'Can you help with carrier paperwork?',
    answer: 'Yes. We assist in filling out broker setup packets, coordinating certificate of insurance (COI) requests with your insurance agency, checking rate confirmations against agreed terms, and organizing bills of lading (BOLs) for your records.'
  },
  {
    id: 'dispatch-process',
    question: 'How does the dispatch process work?',
    answer: 'The process is straightforward: 1) You inform us of your current truck location, equipment, and preferred lanes. 2) We search load boards and industry contacts for suitable freight. 3) We review options with you and negotiate with brokers. 4) Once you approve the rate confirmation, you haul the load while we assist with check calls and documentation.'
  },
  {
    id: 'info-to-get-started',
    question: 'What information do you need to get started?',
    answer: 'To review your operation and start communication, we need your basic details: company name, contact person, phone (your direct contact number), email, equipment type, number of trucks, and preferred running lanes. When moving to active dispatch support, standard active MC authority, W-9, and certificate of insurance (COI) are verified.'
  }
];

export const EQUIPMENT_OPTIONS = [
  'Dry Van',
  'Reefer',
  'Flat Bed',
  'Step Deck',
  'Box Truck',
  'Flat Bed Hot Shot',
  'Power Only',
  'Other Equipment'
];

export const EQUIPMENT_DETAILS: EquipmentType[] = [
  {
    id: 'dry-van',
    name: 'Dry Van',
    category: '53ft Enclosed Trailers',
    specs: 'Standard 53ft air-ride trailers, general dry freight, palletized consumer & industrial products',
    idealFor: 'Consistent nationwide freight lanes, regional consumer products, and warehouse-to-warehouse routes.'
  },
  {
    id: 'reefer',
    name: 'Reefer',
    category: '53ft Temperature-Controlled',
    specs: 'Continuous temp-controlled trailers, frozen goods, fresh produce, meat, and pharmaceuticals',
    idealFor: 'Food and beverage shippers, agricultural harvest corridors, and temperature-sensitive commercial freight.'
  },
  {
    id: 'flat-bed',
    name: 'Flat Bed',
    category: '48ft / 53ft Open Deck',
    specs: 'Standard flatbed trailers, steel coils, lumber, pipe, building materials, and strapped freight',
    idealFor: 'Industrial manufacturing, infrastructure projects, building supply distributors, and heavy commercial cargo.'
  },
  {
    id: 'step-deck',
    name: 'Step Deck',
    category: 'Single & Double Drop Decks',
    specs: 'Lower deck height for taller cargo, heavy equipment, agricultural machinery, and specialized freight',
    idealFor: 'Over-height machinery, tractors, industrial tanks, and equipment requiring ramp loading.'
  },
  {
    id: 'box-truck',
    name: 'Box Truck',
    category: '26ft Straight Trucks',
    specs: 'Dock-height straight trucks, hydraulic liftgates, pallet jack friendly, regional distribution',
    idealFor: 'Regional expedited freight, metropolitan delivery, local cross-dock consolidation, and dedicated routes.'
  },
  {
    id: 'flat-bed-hot-shot',
    name: 'Flat Bed Hot Shot',
    category: 'Class 3-5 Trucks with 40ft Gooseneck',
    specs: 'Rapid turnaround, 40ft low-profile gooseneck trailers, oilfield equipment, and high-priority cargo',
    idealFor: 'Time-critical commercial parts, machinery deliveries, energy sector freight, and agile short-notice loads.'
  },
  {
    id: 'power-only',
    name: 'Power Only',
    category: 'Tractor Only / Hook & Haul',
    specs: 'Standard semi tractors pulling pre-loaded broker/shipper trailers, container chassis, and relocation moves',
    idealFor: 'Drop-and-hook operations, trailer moves, intermodal container relays, and fast turnaround assignments.'
  }
];

export const COMPARISON_POINTS = [
  {
    before: 'Searching for loads on boards while driving or resting',
    after: 'Dedicated load search support matching your preferences',
    tag: 'Load Search Support'
  },
  {
    before: 'Endless broker calls, hold times, and check-in rings',
    after: 'Professional broker communication handled on your behalf',
    tag: 'Broker Communication'
  },
  {
    before: 'Quick rate discussions without thorough market checks',
    after: 'Focused rate negotiation support before booking',
    tag: 'Negotiation Support'
  },
  {
    before: 'Juggling setup packets, COI requests, and rate cons in the cab',
    after: 'Organized documentation and packet administration',
    tag: 'Organized Documentation'
  },
  {
    before: 'Scrambling for pickup numbers, receiver hours, and dock specs',
    after: 'Coordinated dispatch details and timing notes',
    tag: 'Dispatch Coordination'
  },
  {
    before: 'Heavy administrative workload eating into driving hours',
    after: 'Ongoing dispatch support so you stay focused on the road',
    tag: 'Ongoing Support'
  }
];

export const LOAD_EVALUATION_FACTORS = [
  {
    factor: 'Rate & RPM',
    description: 'We evaluate the gross rate alongside the actual rate per loaded mile to confirm financial alignment with your operating target.',
    iconName: 'DollarSign'
  },
  {
    factor: 'Total Miles & Route Geometry',
    description: 'Practical routing check examining tolls, elevation, terrain, and verified highway mileage rather than raw straight-line estimates.',
    iconName: 'Navigation'
  },
  {
    factor: 'Deadhead Proximity',
    description: 'Factoring in empty miles to shipper pickup to preserve your hours of service (HOS) and fuel economy.',
    iconName: 'Compass'
  },
  {
    factor: 'Pickup & Delivery Facilities',
    description: 'Checking shipper and receiver appointment flexibility, detention history, and facility dock efficiency.',
    iconName: 'MapPin'
  },
  {
    factor: 'Equipment & Cargo Weight',
    description: 'Confirming cargo weight distribution, trailer specs, tarp/strap requirements, or reefer temp settings match your truck.',
    iconName: 'Truck'
  },
  {
    factor: 'Timing & Hours of Service',
    description: 'Verifying delivery windows allow realistic transit times without pushing legal drive limits or stressing the driver.',
    iconName: 'Clock'
  },
  {
    factor: 'Destination Lane Suitability',
    description: 'Analyzing outbound freight availability at the destination so you don’t drop into a stagnant or low-freight market.',
    iconName: 'TrendingUp'
  }
];
