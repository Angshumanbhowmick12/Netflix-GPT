export const LOGO_URL="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const USER_ICON="https://occ-0-3351-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"

export const API_OPTIONS={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + import.meta.env.VITE_APP_TMDB_KEY,
    }
  };

 export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500/"

  export const BG_URL="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const SUPPORTED_LANGUAGES=[
  {identifier:"en",name:"Engish"},
  {identifier:"hindi",name:"Hindi"},
  {identifier:"spanish",name:"Spanish"},
]
