export class GlassesList {
    constructor() {
        this.gList = [];
    }
    addGlasses (glasses) {
        this.gList.push(glasses);
    }
    renderGlasses () {
        let content = '';
        content = this.gList.reduce((glcontent,item, index) => {
            glcontent += `
                <div style="cursor: pointer;" class = "col-4">
                    <img class= "img-fluid" onclick ="tryOnGlasses(event)" data-id ="${item.id}" src= "${item.src}" alt="Glasses"></img>
                </div>
            `;
            return glcontent;
        },'');

        return content;
    }
}