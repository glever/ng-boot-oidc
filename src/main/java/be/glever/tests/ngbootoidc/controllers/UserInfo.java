package be.glever.tests.ngbootoidc.controllers;


import lombok.Builder;
import lombok.Data;

@Data
@Builder
public final class UserInfo {
    private String name;
}
