import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { LocalStorageService } from "../login/local-storage.service";
import { user } from "../login/user.model";
import { Campus, Review, University } from "./dashboard.model";
import { DashboardService } from "./dashboard.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ["dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  isShow: boolean;

  imageUrl: string;

  bgUrl: string;

  reviews: any[];

  reviewer: Review;

  universities: University[];

  university: University;

  items: MenuItem[];

  showComment: boolean;

  showUser: boolean;

  showNotify: boolean;

  showReply: boolean;

  //information user
  userToken: string;
  avatarUrl: string;
  userName: string;

  constructor(
    private services: DashboardService,
    private localStorageService: LocalStorageService
  ) {}
  ngOnInit() {
    this.showComment = false;
    this.showUser = false;
    this.showNotify = false;
    let review = [
      {
        name: "Cơ sở vật chất",
        overallRating: "4",
        detail: [
          {
            name: "Nhà xe",
            rating: "3",
          },
          {
            name: "Căn tin",
            rating: "4",
          },
          {
            name: "Thư viện",
            rating: "4",
          },
          {
            name: "Phòng học",
            rating: "4",
          },
          {
            name: "Phòng thực hành",
            rating: "4",
          },
          {
            name: "Thiết bị giảng dạy",
            rating: "4",
          },
        ],
        pros: "- Thiết bị dạy học được trang bị theo quy định của Bộ Giáo dục và Đào tạo.-Các phòng học bộ môn được trang bị đầy đủ bàn, ghế, tủ, giá, kệ, hệ thống điện, nước, hệ thống quạt, thông gió, các thiết bị hỗ trợ khác và thiết bị dạy học, học liệu theo tính chất đặc thù của từng bộ môn.",
        cons: "- Thiếu phòng chuyên môn, nhà đa năng, các phòng chức năng, khu vực vệ sinh không đảm bảo, thiếu các khu vui chơi giải trí.",
        pictures: [
          {
            url: "https://i.chungta.vn/2020/02/17/10-1581877494_860x0.jpg",
          },
          {
            url: "https://kenh14cdn.com/203336854389633024/2021/8/12/photo-1-16287868982631141281336.jpg",
          },
        ],
      },
      {
        name: "Hoạt động sự kiện",
        overallRating: "4",
        detail: [
          {
            name: "Quy mô sự kiện",
            rating: "4",
          },
          {
            name: "Mức độ đa dạng",
            rating: "4",
          },
          {
            name: "Sức lan tỏa",
            rating: "4",
          },
          {
            name: "Đội ngũ nhân sự",
            rating: "4",
          },
        ],
        pros: "- Kỹ năng tương tác giữa các cá nhân tốt.\n- Dồi dào năng lượng từ các cá thể sinh viên của trường.\n- Luôn sáng tạo và đổi mới trong khâu tổ chức.\n- Cẩn thận, tỉ mỉ trong từng chi tiết.",
        cons: "- Chi phí tổ chức sự kiện lớn.\n- Thiếu nhân sự tổ chức, thông thường phải thuê ngoài.\n- Hệ thống thiết bị sự kiện kém, lạc hậu không đáp ứng nhu cầu của doanh nghiệp.\n- Gặp rủi ro trong tổ chức khi thuê đơn vị thiếu năng lực tổ chức.",
        pictures: [
          {
            url: "https://i.ytimg.com/vi/XXeACiNG8EA/maxresdefault.jpg",
          },
        ],
      },
      {
        name: "Chất lượng đào tạo ",
        overallRating: "4",
        detail: [
          {
            name: "Lộ trình các môn học",
            rating: "4",
          },
          {
            name: "Tài liệu môn học",
            rating: "4",
          },
          {
            name: "Giảng viên",
            rating: "4",
          },
        ],
        pros: "- Dạy học theo định hướng phát triển năng lực học sinh mang đến những thuận lợi sau đây:\n-Linh hoạt cho tất cả các đối tượng học sinh, bất kể nền tảng kiến ​​thức hoặc trình độ hiểu biết.\n-Loại bỏ sự bất bình đẳng trong quá trình học tập, học sinh nắm chắc “chất lượng kiến thức”.\n-Học sinh được chuẩn bị các kỹ năng cần thiết để thành công khi trưởng thành\n-Học sinh học các kĩ năng để học tập tốt hơn và chịu trách nhiệm về quá trình học tập của mình.\n-Học sinh được khuyến khích để phát triển mọi mặt, phát hiện và phát triển thế mạnh của bản thân\n-Học sinh được thỏa sức sáng tạo, từ đó khai thác hết những tiềm lực của học sinh\n-Kéo gần mối quan hệ cô - trò, thầy - trò.",
        cons: "- Khó khăn trong cách tiếp cận vấn đề.\n-Chương trình học ở các cấp tuy có giảm tải, nhưng vẫn còn khá nặng đối với nhiều giáo viên và học sinh.\n-Công tác đổi mới phương pháp ở nhiều trường học còn thiếu sự giám sát, nhắc nhở từ các cấp lãnh đạo.\n-Nhiều giáo viên chỉ thực hiện đổi mới theo hình thức, mang tính chất đối phó.",
        pictures: [
          {
            url: "",
          },
        ],
      },
    ];

    this.userToken = this.localStorageService.getUserToken();
    let user: user = JSON.parse(this.userToken);
    if (user) {
      this.avatarUrl = user.avatarURL;
      this.userName = user.name;
    }
    this.isShow = true;

    // //get publish reviews
    // this.services.getPublishedReviews().subscribe((res) => {
    //   if (null !== res) {
    //     this.reviews = res["reviews"];
    //     this.isShow = false;
    //   }
    // });

    this.reviews = review;
    this.services.getPublishedReviews().subscribe((res) => {
      if (null !== res) {
        this.reviewer = res["reviews"][0];
        this.isShow = false;
      }
    });

    this.services.getUniversities().subscribe((res) => {
      this.universities = res["universitys"];
    });

    this.items = [
      {
        label: "Trang chủ",
        icon: "pi pi-home",
        command: (event) => this.redirectHome(),
        styleClass: "active",
      },
      {
        label: "Thông báo",
        icon: "pi pi-bell",
        command: (event) => this.showNotifySection(),
      },
      {
        label: "Trang cá nhân",
        icon: "pi pi-user",
        command: (event) => this.showUserSection(),
      },
    ];
  }

  redirectHome() {}

  redirectNotify() {}

  openUser() {}

  showCommentSection() {
    if (!this.showComment) {
      this.showComment = true;
    } else {
      this.showComment = false;
    }
  }

  showReplyCommentSection() {
    if (!this.showComment) {
      this.showComment = true;
    } else {
      this.showComment = false;
    }
  }

  showUserSection() {
    if (!this.showUser) {
      this.showUser = true;
    } else {
      this.showUser = false;
    }
  }

  showNotifySection() {
    if (!this.showNotify) {
      this.showNotify = true;
    } else {
      this.showNotify = false;
    }
  }
}
