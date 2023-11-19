export function urlMaker(query: string) {
  const Cmsurl = process.env.CmsQueryUrl;
  return Cmsurl + encodeURIComponent(query)
}

class CMS {

  bestProductsUrl() {
    return urlMaker(`
    *[
    _type == "product" && _id in *[ _type == "Best"].product._ref
    ]
    {
      "id": _id,
      "title": name,
      "image": images[0].asset -> url,
      price
    }`)
  }

  productsUrl() {
    return urlMaker(`
    *[ _type == "product" ]
    {
      "id": _id,
      "title": name,
      "image": images[0].asset -> url,
      price
    }`)
  }

  searchProductUrl(value: string) {
    return urlMaker(`
    *[ _type == "product" && title == "${value}" ]
    {
      "id": _id,
      "title": name,
      "image": images[0].asset -> url,
      price
    }
    `)
  }

  categoriesUrl() {
    return urlMaker(`
    *[ _type == "Category" ]{ "id": _id, name }
    `)
  }

  getIdProductUrl(id: string) {
    return urlMaker(`
    *[ 
      _type == "product"
      &&
      _id == "${id}"
    ]{
      "id": _id,
      "title": name,
      "images": images[].asset -> url,
      price,
      "category": category._ref   
    }
    `)
  }
}

export default CMS;
