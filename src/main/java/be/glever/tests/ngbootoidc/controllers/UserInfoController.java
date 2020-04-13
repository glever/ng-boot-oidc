package be.glever.tests.ngbootoidc.controllers;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("api")
public class UserInfoController implements BaseController {
    @RequestMapping("userinfo")
    public UserInfo getUserInfo(Principal principal) {
        return UserInfo.builder().name(principal.getName()).build();
    }
}
