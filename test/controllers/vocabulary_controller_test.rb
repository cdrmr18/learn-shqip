require 'test_helper'

class VocabularyControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get vocabulary_index_url
    assert_response :success
  end

  test "should get show" do
    get vocabulary_show_url
    assert_response :success
  end

  test "should get new" do
    get vocabulary_new_url
    assert_response :success
  end

  test "should get create" do
    get vocabulary_create_url
    assert_response :success
  end

  test "should get destroy" do
    get vocabulary_destroy_url
    assert_response :success
  end

end
