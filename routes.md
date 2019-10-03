A handy dandy guide to setting up client side routes


Routes created:

*Create User
*Create Org
*Create Distributor
*Create Product
*Create Rep

//**********************
// Create User
//**********************
endpoint: '/api/createUser'
type: /POST
requires: {
    role_id: int id# from the roles table
    first_name: varchar
    last_name: varchar
    email: varchar
    org_id: int id# from the organization table
    password: might not be necesary, depending on auth. This can be null, but it is set up in case you need it. 
}

//**********************
// Create Organization
//**********************
endpoint: '/api/createOrg'
type: /POST
requires: {
    org_name: varchar
    master_inventory: the id# of the master inventory par list. Probably null at moment of org creation, so don't worry about this too much
    address: varchar
    city: varchar
    state: varchar
    zip: INTEGER. 5 digit american style zip code
    phone: VARCHAR. No other characters except for numbers. Format as "1231231234"
    email: varchar
}

//**********************
// Create Distributor
//**********************
endpoint: '/api/createDist'
type: /POST
requires: {
    name: varchar
    address: varchar
    city: varchar
    state: varchar
    zip: INTEGER. 5 digit american style zip code
    phone: VARCHAR. No other characters except for numbers. Format as "1231231234"
    email: varchar
}

//**********************
// Create Product
//**********************
endpoint: '/api/createProduct'
type: /POST
requires: {
    upc: VARCHAR. No other characters except numbers. Format as "000000000000"
    product_name: Hopefully this will reflect the UPC product name as closely as possible. 
    category_id: Int, id# of the category that this product belongs to. 
    sub_category_id: int, id# of the subcategory that this product belongs to
    size: int, id# of the bottle size that this product belongs to
    notes: varchar
    tare: weight. Don't have a standard for this yet, leave blank for now
    dist_id: int, id# of the distributor this product is sold by
    price: INTEGER. Best way to represent this accurately over a large amount of transactions is to enter it as cents, so we're doing that here. ($19.99 => 1999)
}

//**********************
// Create Rep
//**********************
endpoint: '/api/createRep'
type: /POST
requires: {
    first_name: varchar
    last_name: varchar
    email: varchar
    phone: VARCHAR. No other characters except for numbers. Format as "1231231234"
    dist_id: int, id# of the distributor that employs this rep
}