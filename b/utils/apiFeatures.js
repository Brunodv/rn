/*
paginación manual revisión

class ApiFeatures {
    constructor(query,queryStr){
        this.query=query;
        this.queryStr=this.queryStr;
     //   this.queryStr=this.queryStr;
    }
    pagination(pubForPage){
        const currentPage=Number(this.queryStr.page) || 1;
        console.log(currentPage)
        const skip=pubForPage * (currentPage - 1); // 3 * 1 
        console.log(skip)
        this.query = this.query.limit(pubForPage).skip(skip);
        return this;
    }
};

module.exports = ApiFeatures */