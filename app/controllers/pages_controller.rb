class PagesController < ApplicationController
  def home
    @phrases = Phrase.all
  end
end
