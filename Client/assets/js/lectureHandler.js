class Carousel {
    constructor() {
        this.currentPage = 1;
        this.perPage = 1;
        this.data = [];
        this.getData();
        //if (this.data) {
        // this.displayData();
        //}
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
        if (this.currentPage === 1) {
            return;
        }
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
    fetch() {
        const data = [
            {
                id: "1",
                data: "Data 1",
            },
            {
                id: "2",
                data: "Data 2",
            },
            {
                id: "3",
                data: "Data 3",
            },
            {
                id: "4",
                data: "Data4",
                gameName: "nameThatSong",
            },
            {
                id: "5",
                data: "Data 5",
                image: "https://pixy.org/src/21/219269.jpg",
            },
            {
                id: "6",
                data: "Data 6",
            },
        ];
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, 2000);
        });
    }
    async getData() {
        try {
            const response = await this.fetch();
            this.data = response;
            this.displayData();
        } catch (error) {
            console.log("fetch failed", error);
        }
    }
}
let carousel = new Carousel();
