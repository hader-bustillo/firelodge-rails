require "test_helper"

class WelcomeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get welcome_index_url
    assert_response :success
  end

  test "should get realtime_webcam" do
    get welcome_realtime_webcam_url
    assert_response :success
  end
end
