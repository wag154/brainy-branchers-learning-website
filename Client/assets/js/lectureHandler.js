class Carousel {
    constructor() {
        this.currentPage = 1;
        this.perPage = 1;
        this.data = [];
        this.getData();
        document
            .querySelector(".right-arrow")
            .addEventListener("click", (event) => {
                event.preventDefault();
                this.handleRightClick();
            });
        document
            .querySelector(".left-arrow")
            .addEventListener("click", (event) => {
                event.preventDefault();
                this.handleLeftClick();
            });
    }
    countTotalPages() {
        let totalPages = Math.ceil(this.data.length / this.perPage);
        return totalPages;
    }
    handleLeftClick() {
        if (this.currentPage === 1) return;
        this.currentPage--;
        this.displayData();
    }
    handleRightClick() {
        const totalPages = this.countTotalPages();
        if (this.currentPage >= totalPages) return;
        this.currentPage++;
        this.displayData();
    }
    paginate() {
        let startIndex = (this.currentPage - 1) * this.perPage;
        let endIndex = this.currentPage * this.perPage;
        return this.data.slice(startIndex, endIndex);
    }
    displayData() {
        if (this.data) {
            let initializeGame;
            const paginatedList = this.paginate();
            document.querySelector(".carousel-wrapper").innerHTML =
                paginatedList !== ""
                    ? paginatedList
                          .map((item) => {
                              if (item.gameName) {
                                  initializeGame = item.gameName;
                                  return `<div class="carousel-item" id =${item.gameName}></div>`;
                              }
                              if (item.image) {
                                  return `<div class="carousel-item" id=${item.id}><img src=${item.image}><p>${item.data}</p></div>`;
                              }
                              return `<div class="carousel-item" id=${item.id}><p>${item.data}</p></div>`;
                          })
                          .join("")
                    : "<div>No Data To show</div>";

            if (initializeGame) {
                switch (initializeGame) {
                    case "nameThatSong":
                        return startGameNameThatSong();
                    case "tangramMemoryGame":
                        return startGameTangram();
                    case "hangManGame":
                        return startHangManGame();
                    case "memoryGame":
                        return startMemoryGame();
                    default:
                        return;
                }
            }
            document.querySelector(".current-page").innerHTML =
                this.currentPage;
            document.querySelector(".total-pages").innerHTML =
                this.countTotalPages();
        }
    }
    async getData() {
        try {
            const response = await fetch("http://127.0.0.1:3000/lecture1")
            .then((response) => response.json())
            .then((data)=>this.data = data)
            this.displayData();
        } catch (error) {
            console.log("fetch failed", error);
        }
    }
}
let carousel = new Carousel();
